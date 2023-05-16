package ph.cdo.xu.groudd.backend.entity.member;

import lombok.AllArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import ph.cdo.xu.groudd.backend.utils.DateService;
import ph.cdo.xu.groudd.backend.utils.EmailService;

import java.util.List;
import java.util.Optional;

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
    public Member update(String email, Member member) {
        Optional<Member> optionalMember = memberRepository.findMemberByEmail(email);
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
        return memberRepository.existsMemberByEmail(email);
    }

    @Override
    public Optional<Member> getMemberByEmail(String email) {
        return memberRepository.findMemberByEmail(email);
    }

    @Override
    public Member validateMember(String email) {
        Optional<Member> optionalMember = memberRepository.findMemberByEmail(email);
        if(optionalMember.isPresent()){
            Member member = optionalMember.get();
            member.setExpirationDate(dateService.addMonthsToDate(member.getStartDate(), 12));
            member.setMembershipStatus(MembershipStatus.ACTIVE);
            return memberRepository.saveAndFlush(member);
        }
        else{
            throw new RuntimeException("Member not found!");
        }
    }


}
