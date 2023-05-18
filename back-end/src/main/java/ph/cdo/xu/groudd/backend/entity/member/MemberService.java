package ph.cdo.xu.groudd.backend.entity.member;

import jakarta.transaction.Transactional;

import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface MemberService {

    Member add(Member member);
    List<Member> allMembers();


    void delete(String email);

    Member update(String email, Member member);
    boolean doesEmailExists(String email);

    Optional<Member> getMemberByEmail(String email);


    Member validateMember(String email);

    List<Member> allUnverified();

    List<Member> allVerified();

     List<Map<String, Object>> sendMembersToFrontEnd(List<Member> members);



     int countActiveMembers();
     int countActiveStudents();
     int countActiveMonthly();

}
