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
        double totalMuayThaiClass = 0;
        double totalTrainerFee = 0;
        double totalMembershipFee = 0;
        double totalWalkInSession = 0;
        double totalMonthlyFee = 0;
        double totalMissingMoney = 0;
        double totalUtilities = 0;
        double totalMaintenance = 0;
        double totalSalary = 0;
        double netProfit = 0;
        double totalCashIn = 0;
        double grossProfit = 0;
        double totalExpense = 0;
        double totalCashOnHand = 0;

        for (TransactionDTO transaction : transactionList) {
            TransactionType transactionType = TransactionType.fromString(transaction.getTransactionType());
            double value = transaction.getValue();
            if (transactionType == TransactionType.MuaythaiClass) {
                totalMuayThaiClass += value;
            }else if(transactionType == TransactionType.TrainerFee){
                totalTrainerFee += value;
            }else if(transactionType == TransactionType.MembershipFee){
                totalMembershipFee += value;
            }else if(transactionType == TransactionType.WalkInSession){
                totalWalkInSession += value;
            }else if(transactionType == TransactionType.MonthlyFee){
                totalMonthlyFee += value;
            } else if (transactionType == TransactionType.Salary) {
                totalSalary += value;
            }else if(transactionType == TransactionType.MissingMoney){
                totalMissingMoney += value;
            } else if (transactionType == TransactionType.Maintenance) {
                totalMaintenance += value;
            }else if(transactionType == TransactionType.CashIn){
                totalCashIn += value;
            } else if (transactionType == TransactionType.Utilities) {
                totalUtilities += value;
            }
        }

        grossProfit = totalMuayThaiClass + totalMembershipFee + totalWalkInSession + totalMonthlyFee;
        totalExpense = totalSalary + totalTrainerFee + totalUtilities + totalMaintenance + totalMissingMoney;
        netProfit = grossProfit - totalExpense;
        totalCashOnHand = (netProfit + totalCashIn) - totalCashOut;

        objectMap.put("quantity", transactionList.size());
        objectMap.put("cashOnHand", Double.parseDouble(String.format("%.2f", totalCashOnHand)));
        objectMap.put("grossProfit",  Double.parseDouble(String.format("%.2f",grossProfit)));
        objectMap.put("expense",  Double.parseDouble(String.format("%.2f",totalExpense)));
        objectMap.put("netProfit",  Double.parseDouble(String.format("%.2f",netProfit)));
        objectMap.put("muayThai",  Double.parseDouble(String.format("%.2f",totalMuayThaiClass)));
        objectMap.put("membershipFee",  Double.parseDouble(String.format("%.2f",totalMembershipFee)));
        objectMap.put("walkIn",  Double.parseDouble(String.format("%.2f",totalWalkInSession)));
        objectMap.put("monthlyFee",  Double.parseDouble(String.format("%.2f",totalMonthlyFee)));

        objectMap.put("trainerFee",  Double.parseDouble(String.format("%.2f",totalTrainerFee)));
        objectMap.put("missingMoney",  Double.parseDouble(String.format("%.2f",totalMissingMoney)));
        objectMap.put("cashOut",  Double.parseDouble(String.format("%.2f",totalCashOut)));
        objectMap.put("utilities", Double.parseDouble(String.format("%.2f", totalUtilities)));
        objectMap.put("maintenance",  Double.parseDouble(String.format("%.2f",totalMaintenance)));
        objectMap.put("salary",  Double.parseDouble(String.format("%.2f",totalSalary)));
        objectMap.put("cashIn",  Double.parseDouble(String.format("%.2f",totalCashIn)));



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
                .transactionType(transaction.getTransactionType().getStringValue())
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
                .transactionType(TransactionType.fromString(transactionDTO.getTransactionType()))
                .value(Double.parseDouble(String.format("%.2f", transactionDTO.getValue())))
                .build();
    }

    @Override
    public Transaction newTransaction(TransactionDTO transactionDTO) {
        Transaction transaction = dtoToEntity(transactionDTO);
        return transactionRepository.save(transaction);
    }


}
