package ph.cdo.xu.groudd.backend.entity.transaction;

import ph.cdo.xu.groudd.backend.entity.member.Member;
import ph.cdo.xu.groudd.backend.entity.member.MemberDTO;
import ph.cdo.xu.groudd.backend.entity.model.Person;
import ph.cdo.xu.groudd.backend.entity.model.enums.Position;
import ph.cdo.xu.groudd.backend.entity.model.enums.TransactionType;
import ph.cdo.xu.groudd.backend.entity.staff.Staff;
import ph.cdo.xu.groudd.backend.entity.staff.StaffDTO;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface TransactionService {

    List<TransactionDTO> getAllDtoTransactions();
    Map<String, Object> getTransactionSummary(List<Transaction> transactions);
    List<Transaction> getAllTransactions();
    List<Transaction> transactionsByMonth(Date date);

    TransactionDTO entityToDTO(Transaction transaction);
    Transaction DtoToEntity(TransactionDTO transactionDTO);




}
