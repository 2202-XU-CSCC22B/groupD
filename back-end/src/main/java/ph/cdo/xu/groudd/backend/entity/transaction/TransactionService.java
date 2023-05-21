package ph.cdo.xu.groudd.backend.entity.transaction;

import java.util.List;
import java.util.Map;

public interface TransactionService {

    List<TransactionDTO> getAllDtoTransactions();
    Map<String, Object> getTransactionSummary(List<Transaction> transactions);
    List<Transaction> getAllTransactions();
    List<Transaction> transactionsByMonth(int month);

    TransactionDTO entityToDTO(Transaction transaction);
    Transaction dtoToEntity(TransactionDTO transactionDTO);

    Transaction newTransaction(TransactionDTO transactionDTO);



}
