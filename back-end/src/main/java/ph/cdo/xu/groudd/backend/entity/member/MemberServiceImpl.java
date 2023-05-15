package ph.cdo.xu.groudd.backend.entity.member;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class MemberServiceImpl implements MemberService{

    private MemberRepository memberRepository;
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
}
