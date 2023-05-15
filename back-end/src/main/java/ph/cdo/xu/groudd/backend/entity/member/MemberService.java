package ph.cdo.xu.groudd.backend.entity.member;

import java.util.List;

public interface MemberService {

    Member add(Member member);
    List<Member> allMembers();

    boolean doesEmailExists(String email);
}
