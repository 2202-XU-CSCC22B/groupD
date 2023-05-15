package ph.cdo.xu.groudd.backend.entity.member;

import lombok.AllArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import ph.cdo.xu.groudd.backend.utils.EmailService;

import java.util.List;

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
    public boolean sendEmail(Member member) {
//        SimpleMailMessage message = new SimpleMailMessage();
//        message.setFrom("noreply@unsathedfitness.com");
//        message.setTo(member.getEmail());
//        message.setSubject("Verification");
//        message.setText("YOu have registered");
//        javaMailSender.send(message);
//        System.out.println("Email sent!");

        return true;
    }
}
