package ph.cdo.xu.groudd.backend.entity.member;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long > {

    boolean existsMemberByContactDetailsEmail(String email);
   Optional<Member> findMemberByContactDetailsEmail(String email);
    @Transactional
    void deleteMemberByContactDetailsEmail(String email);
}
