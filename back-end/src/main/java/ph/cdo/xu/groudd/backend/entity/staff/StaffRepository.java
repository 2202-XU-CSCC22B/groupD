package ph.cdo.xu.groudd.backend.entity.staff;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StaffRepository extends JpaRepository<Staff, Long> {
    boolean existsByContactDetailsEmail(String email);

    Optional<Staff> findByContactDetailsEmail(String email);
}
