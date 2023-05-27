package ph.cdo.xu.groudd.backend.entity.transaction;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {

    List<Transaction> findAllByMemberId(Long id, Sort sort);
    List<Transaction> findAllByStaffId(Long id, Sort sort);

    List<Transaction> findAll(Sort sort);
}
