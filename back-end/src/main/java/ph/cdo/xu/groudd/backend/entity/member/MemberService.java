package ph.cdo.xu.groudd.backend.entity.member;

import java.util.List;
import java.util.Optional;

public interface MemberService {

    Member add(Member member);
    List<Member> allMembers();


    Member update(String email, Member member);
    boolean doesEmailExists(String email);

    Optional<Member> getMemberByEmail(String email);


    Member validateMember(String email);
}
