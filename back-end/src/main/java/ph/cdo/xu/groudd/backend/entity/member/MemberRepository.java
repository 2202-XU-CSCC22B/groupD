package ph.cdo.xu.groudd.backend.entity.member;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.yaml.snakeyaml.events.Event;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long > {

    boolean existsMemberByEmail(String email);
}
