package ph.cdo.xu.groudd.backend.entity.transaction;

import java.util.List;
import java.util.Map;

public interface TransactionService {

    List<TransactionDTO> getAllDtoTransactions();
    Map<String, Object> getTransactionSummary(List<TransactionDTO> transactions);
    List<TransactionDTO> getAllTransactions();
    List<TransactionDTO> transactionsByMonth(int month, int year);

    TransactionDTO entityToDTO(Transaction transaction);
    Transaction dtoToEntity(TransactionDTO transactionDTO);

    Transaction newTransaction(TransactionDTO transactionDTO);





}
