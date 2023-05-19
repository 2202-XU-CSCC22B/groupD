package ph.cdo.xu.groudd.backend.entity.member;

import lombok.AllArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import ph.cdo.xu.groudd.backend.entity.model.enums.Status;
import ph.cdo.xu.groudd.backend.utils.DateService;

import java.util.*;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MemberServiceImpl implements MemberService{

    private MemberRepository memberRepository;
    private JavaMailSender javaMailSender;
    private DateService dateService;

    @Override
    public Member add(Member member) {

        return memberRepository.saveAndFlush(member);
    }

    @Override
    public List<Member> allMembers() {
        return memberRepository.findAll();
    }

    @Override
    public void delete(String email) {
        memberRepository.deleteMemberByContactDetailsEmail(email);
    }

    @Override
    public Member update(String email, Member member) {
        Optional<Member> optionalMember = memberRepository.findMemberByContactDetailsEmail(email);
        if(optionalMember.isEmpty()){
            throw new RuntimeException("Email not found!");
        }else{
            Member temp = optionalMember.get();

            temp.copyFields(member);
            return memberRepository.save(temp);
        }
    }


    @Override
        public boolean doesEmailExists(String email) {
        return memberRepository.existsMemberByContactDetailsEmail(email);
    }

    @Override
    public Optional<Member> getMemberByEmail(String email) {
        return memberRepository.findMemberByContactDetailsEmail(email);
    }

    @Override
    public Member validateMember(String email) {
        Optional<Member> optionalMember = memberRepository.findMemberByContactDetailsEmail(email);
        if(optionalMember.isPresent()){
            Member member = optionalMember.get();
            member.getMembershipDetails().setMembershipEndDate(dateService.addMonthsToDate(new Date(), 12));
            member.getMembershipDetails().setMembershipStatus(Status.ACTIVE);
            return memberRepository.saveAndFlush(member);
        }
        else{
            throw new RuntimeException("Member not found!");
        }
    }

    @Override
    public List<Member> allUnverified() {
      return  memberRepository.findAll().stream()
                .filter(member -> member.getMembershipDetails().getMembershipStatus() == Status.UNVERIFIED)
                .collect(Collectors.toList());
    }

    @Override
    public List<Member> allVerified() {
        return  memberRepository.findAll().stream()
                .filter(member -> member.getMembershipDetails().getMembershipStatus() != Status.UNVERIFIED)
                .collect(Collectors.toList());
    }

    @Override
    public List<Map<String, Object>> sendMembersToFrontEnd(List<Member> members) {
        List<Map<String, Object>> mappedMembers = new ArrayList<>();
        for (Member member : members) {
            Map<String, Object> memberMap = new LinkedHashMap<>();
            memberMap.put("createdAt", member.getCreatedAt());
            memberMap.put("firstName", member.getName().getFirstName());
            memberMap.put("lastName", member.getName().getLastName());
            memberMap.put("phone", member.getContactDetails().getPhone());
            memberMap.put("email", member.getContactDetails().getEmail());
            memberMap.put("birthday", member.getBirthDetails().getBirthday());
            memberMap.put("gender", member.getGender());
            memberMap.put("address", member.getAddress());
            memberMap.put("id", member.getId());
            memberMap.put("weight", member.getWeight());
            memberMap.put("height", member.getHeight());
            memberMap.put("occupation", member.getOccupation());

            MembershipDetails membershipDetails = member.getMembershipDetails();
            memberMap.put("membershipStartDate", membershipDetails.getMembershipStartDate());
            memberMap.put("membershipEndDate", membershipDetails.getMembershipEndDate());
            memberMap.put("monthlySubscriptionStartDate", membershipDetails.getMonthlySubscriptionStartDate());
            memberMap.put("monthlySubscriptionEndDate", membershipDetails.getMonthlySubscriptionEndDate());
            memberMap.put("studentStartDate", membershipDetails.getStudentStartDate());
            memberMap.put("studentEndDate", membershipDetails.getStudentEndDate());
            memberMap.put("membershipStatus", membershipDetails.getMembershipStatus());
            memberMap.put("monthlySubscriptionStatus", membershipDetails.getMonthlySubscriptionStatus());
            memberMap.put("studentStatus", membershipDetails.getStudentStatus());

            mappedMembers.add(memberMap);
        }

        return mappedMembers;
    }

    @Override
    public int countActiveMembers() {
       return countStatus("membership");
    }

    @Override
    public int countActiveStudents() {
        return countStatus("student");
    }

    @Override
    public int countActiveMonthly() {
        return countStatus("monthly");
    }



    private int countStatus(String status) {
        int count = 0;
        List<Member> members = memberRepository.findAll(); // Assuming you have a method to retrieve the list of members

        for (Member member : members) {
            Status membershipStatus = member.getMembershipDetails().getMembershipStatus();
            Status monthlySubscriptionStatus = member.getMembershipDetails().getMonthlySubscriptionStatus();
            Status studentStatus = member.getMembershipDetails().getStudentStatus();

            if ((status.equals("membership") && membershipStatus == Status.ACTIVE) ||
                    (status.equals("monthly") && monthlySubscriptionStatus == Status.ACTIVE) ||
                    (status.equals("student") && studentStatus == Status.ACTIVE)) {
                count++;
            }
        }

        return count;
    }


}
