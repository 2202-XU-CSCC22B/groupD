package ph.cdo.xu.groudd.backend.entity.member;

import jakarta.transaction.Transactional;
import ph.cdo.xu.groudd.backend.entity.model.enums.Status;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface MemberService {

    Member add(Member member);
    List<Member> allMembers();


    void delete(String email);

    Member update(Long id, MemberDTO memberDTO);
    boolean doesEmailExists(String email);

    Optional<Member> getMemberByEmail(String email);


    Member validateMember(String email, Date date);

    List<Member> allUnverified();

    List<Member> allVerified();

     List<Map<String, Object>> sendMembersToFrontEnd(List<Member> members);

     MemberDTO entityToDTO(Member member);
     Member dtoToEntity(MemberDTO memberDTO);

     List<MemberDTO> dtoMembers(List<Member> memberList);






     int countActiveMembers();
     int countActiveStudents();
     int countActiveMonthly();

}
