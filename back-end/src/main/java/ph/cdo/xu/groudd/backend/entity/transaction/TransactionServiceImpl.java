package ph.cdo.xu.groudd.backend.entity.transaction;

import lombok.AllArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import ph.cdo.xu.groudd.backend.entity.member.Member;
import ph.cdo.xu.groudd.backend.entity.member.MemberService;
import ph.cdo.xu.groudd.backend.entity.model.Person;
import ph.cdo.xu.groudd.backend.entity.model.enums.TransactionType;
import ph.cdo.xu.groudd.backend.entity.staff.StaffDTO;

import java.util.*;
import java.util.function.Predicate;

@Service
@AllArgsConstructor
public class TransactionServiceImpl implements TransactionService {
    private TransactionRepository transactionRepository;


    @Override
    public List<TransactionDTO> getAllDtoTransactions() {
        List<Transaction> transactionList = transactionRepository.findAll(Sort.by(Sort.Direction.DESC, "date"));
        List<TransactionDTO> transactionDTOList = new ArrayList<>();

        for (Transaction transaction : transactionList) {
            transactionDTOList.add(entityToDTO(transaction));
        }

        return transactionDTOList;
    }

    @Override
    public Map<String, Object> getTransactionSummary(List<TransactionDTO> transactionList) {
        Map<String, Object> objectMap = new HashMap<>();
        double totalCashOut = 0;
        double totalSales = 0;
        double totalUtilities = 0;
        double totalMaintenance = 0;
        double totalSalary = 0;
        double netProfit = 0;

        for (TransactionDTO transaction : transactionList) {
            TransactionType transactionType = transaction.getTransactionType();
            double value = transaction.getValue();
            if (transactionType == TransactionType.Sales) {
                totalSales += value;
            } else if (transactionType == TransactionType.Salary) {
                totalSalary += value;
            } else if (transactionType == TransactionType.Maintenance) {
                totalMaintenance += value;
            } else if (transactionType == TransactionType.Utilities) {
                totalUtilities += value;
            }
        }

        netProfit = totalSales - (totalSalary + totalUtilities + totalMaintenance + totalCashOut);
        objectMap.put("cashOut", totalCashOut);
        objectMap.put("sales", totalSales);
        objectMap.put("utilities", totalUtilities);
        objectMap.put("maintenance", totalMaintenance);
        objectMap.put("salary", totalSalary);
        objectMap.put("netProfit", netProfit);



        return objectMap;

    }

    @Override
    public List<TransactionDTO> getAllTransactions() {

        return getAllDtoTransactions();
    }

    @Override
    public List<TransactionDTO> transactionsByMonth(int month, int year) {
        List<TransactionDTO> transactionList = getAllDtoTransactions();

        List<TransactionDTO> filteredTransactions = new ArrayList<>();
        for (TransactionDTO transaction : transactionList) {
            Calendar calendar = Calendar.getInstance();
            calendar.setTime(transaction.getDate());
            int transactionMonth = calendar.get(Calendar.MONTH);
            if (transactionMonth == (month - 1)) {
                filteredTransactions.add(transaction);
            }
        }

        return filteredTransactions;
    }

    @Override
    public TransactionDTO entityToDTO(Transaction transaction) {
        return TransactionDTO
                .builder()
                .value(Double.parseDouble(String.format("%.2f", transaction.getValue())))
                .id(transaction.getId() == null ? null : transaction.getId())
                .date(transaction.getDate())
                .description(transaction.getDescription())
                .paymentMethod(transaction.getPaymentMethod())
                .transactionType(transaction.getTransactionType())
                .memberID(transaction.getMember() == null ? null : transaction.getMember().getId())
                .staffID(transaction.getStaff() == null ? null : transaction.getStaff().getId())
                .name(transaction.getMember() != null ? transaction.getMember().getName().toString() :
                        transaction.getStaff() != null ? transaction.getStaff().getName().toString() : "None")
                .entity(transaction.getMember() != null ? "Member" :
                        transaction.getStaff() != null ? "Staff" : "None")
                .build();
    }

    @Override
    public Transaction dtoToEntity(TransactionDTO transactionDTO) {
        return Transaction
                .builder()
                .id(transactionDTO.getId() == null ? null : transactionDTO.getId())
                .date(transactionDTO.getDate())
                .paymentMethod(transactionDTO.getPaymentMethod())
                .description(transactionDTO.getDescription())
                .transactionType(transactionDTO.getTransactionType())
                .value(Double.parseDouble(String.format("%.2f", transactionDTO.getValue())))
                .build();
    }

    @Override
    public Transaction newTransaction(TransactionDTO transactionDTO) {
        Transaction transaction = dtoToEntity(transactionDTO);
        return transactionRepository.save(transaction);
    }


}
