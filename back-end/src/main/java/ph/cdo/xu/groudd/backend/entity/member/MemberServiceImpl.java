package ph.cdo.xu.groudd.backend.entity.member;

import lombok.AllArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import ph.cdo.xu.groudd.backend.entity.model.BirthDetails;
import ph.cdo.xu.groudd.backend.entity.model.ContactDetails;
import ph.cdo.xu.groudd.backend.entity.model.Name;
import ph.cdo.xu.groudd.backend.entity.model.enums.Gender;
import ph.cdo.xu.groudd.backend.entity.model.enums.Status;
import ph.cdo.xu.groudd.backend.utils.DateService;
import ph.cdo.xu.groudd.backend.utils.StatusService;

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
    public Member update(Long id, MemberDTO memberDTO) {
        Optional<Member> optionalMember = memberRepository.findById(id);
        if(optionalMember.isPresent()){
            Member temp = optionalMember.get();
            temp.setOccupation(memberDTO.getOccupation());
            temp.getName().setFirstName(memberDTO.getFirstName());
            temp.getName().setLastName(memberDTO.getLastName());
            temp.getContactDetails().setPhone(memberDTO.getPhone());
            temp.getContactDetails().setEmail(memberDTO.getEmail());
            temp.setAddress(memberDTO.getAddress());
            temp.setHeight(memberDTO.getHeight());
            temp.setWeight(memberDTO.getWeight());
            temp.setBirthDetails(BirthDetails.builder()
                    .birthday(memberDTO.getBirthday())
                    .build());

            return memberRepository.save(temp);
        }else{
            throw new RuntimeException("Member not found!");
        }


    }


    @Override
        public boolean doesEmailExists(String email) {
        List<Member> memberList = memberRepository.findAll();

        for(int i =0; i < memberList.size(); i++){
                if(memberList.get(i).getContactDetails().getEmail().equalsIgnoreCase(email))
                    return true;
            }
        return false;


        }




    @Override
    public Optional<Member> getMemberByEmail(String email) {
        return memberRepository.findMemberByContactDetailsEmail(email);
    }

    @Override
    public Member validateMember(String email, Date date) {
        Optional<Member> optionalMember = memberRepository.findMemberByContactDetailsEmail(email);
        if(optionalMember.isPresent()){
            Member member = optionalMember.get();
            member.getMembershipDetails().setMembershipStartDate(date);
            member.getMembershipDetails().setMembershipEndDate(dateService.addMonthsToDate(date, 12));
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
    public MemberDTO entityToDTO(Member member) {
        return MemberDTO
                .builder()
                .id(member.getId())
                .firstName(member.getName().getFirstName().toLowerCase().trim())
                .lastName(member.getName().getLastName().toLowerCase().trim())
                .phone(member.getContactDetails().getPhone().toLowerCase().trim())
                .email(member.getContactDetails().getEmail().toLowerCase().trim())
                .gender(member.getGender())
                .address(member.getAddress().toLowerCase())
                .weight(Double.parseDouble(String.format("%.2f", member.getWeight())))
                .height(Double.parseDouble(String.format("%.2f", member.getHeight())))
                .occupation(member.getOccupation())
                .membershipStartDate(member.getMembershipDetails().getMembershipStartDate())
                .membershipEndDate(member.getMembershipDetails().getMembershipEndDate())
                .studentStartDate(member.getMembershipDetails().getStudentStartDate())
                .studentEndDate(member.getMembershipDetails().getStudentEndDate())
                .monthlySubscriptionStartDate(member.getMembershipDetails().getMonthlySubscriptionStartDate())
                .monthlySubscriptionEndDate(member.getMembershipDetails().getMonthlySubscriptionEndDate())
                .membershipStatus(member.getMembershipDetails().getMembershipStatus())
                .studentStatus(member.getMembershipDetails().getStudentStatus())
                .monthlySubscriptionStatus(member.getMembershipDetails().getMonthlySubscriptionStatus())
                .birthday(member.getBirthDetails().getBirthday())
                .build();
    }

    @Override
    public Member dtoToEntity(MemberDTO memberDTO) {
        return  Member.builder()
                .id(memberDTO.getId())
                .name(new Name(memberDTO.getFirstName().toLowerCase(), memberDTO.getLastName().toLowerCase()))
                .contactDetails(new ContactDetails(memberDTO.getPhone().toLowerCase(), memberDTO.getEmail().toLowerCase()))
                .gender(memberDTO.getGender())
                .address(memberDTO.getAddress().toLowerCase())
                .weight(Double.parseDouble(String.format("%.2f", memberDTO.getWeight())))
                .height(Double.parseDouble(String.format("%.2f", memberDTO.getHeight())))
                .occupation(memberDTO.getOccupation().toLowerCase())
                .membershipDetails(
                        MembershipDetails.builder()
                                .membershipStartDate(memberDTO.getMembershipStartDate())
                                .membershipEndDate(memberDTO.getMembershipEndDate())
                                .monthlySubscriptionStartDate(memberDTO.getMonthlySubscriptionStartDate())
                                .monthlySubscriptionEndDate(memberDTO.getMonthlySubscriptionEndDate())
                                .studentStartDate(memberDTO.getStudentStartDate())
                                .studentEndDate(memberDTO.getStudentEndDate())
                                .membershipStatus(memberDTO.getMembershipStatus())
                                .monthlySubscriptionStatus(memberDTO.getMonthlySubscriptionStatus())
                                .studentStatus(memberDTO.getStudentStatus())
                                .build())
                .birthDetails(BirthDetails
                        .builder()
                        .birthday(memberDTO.getBirthday())
                        .build())
                .build();




    }

    @Override
    public List<MemberDTO> dtoMembers(List<Member> members) {
        List<MemberDTO> memberDTOs = new ArrayList<>();


        for (Member member : members) {
            memberDTOs.add(entityToDTO(member));
        }

        return memberDTOs;
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
