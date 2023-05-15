package ph.cdo.xu.groudd.backend.entity.member;

import java.util.List;
import java.util.Optional;

public interface MemberService {

    Member add(Member member);
    List<Member> allMembers();

    boolean doesEmailExists(String email);

    Optional<Member> getMemberByEmail(String email);


    boolean validateMember(String email, Member member);
}
