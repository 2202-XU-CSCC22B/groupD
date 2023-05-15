package ph.cdo.xu.groudd.backend.entity.member;

import lombok.AllArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import ph.cdo.xu.groudd.backend.utils.EmailService;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class MemberServiceImpl implements MemberService{

    private MemberRepository memberRepository;
    private JavaMailSender javaMailSender;


    @Override
    public Member add(Member member) {

        return memberRepository.saveAndFlush(member);
    }

    @Override
    public List<Member> allMembers() {
        return memberRepository.findAll();
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
    public boolean validateMember(String email, Member member) {
        Optional<Member> optionalMember = memberRepository.findMemberByEmail(email);
        if(optionalMember.isPresent()){
            member.setActive(true);
            return true;
        }
        else{
            return false;
        }
    }


}
