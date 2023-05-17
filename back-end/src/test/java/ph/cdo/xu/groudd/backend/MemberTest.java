package ph.cdo.xu.groudd.backend;


import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import ph.cdo.xu.groudd.backend.entity.member.Member;
import ph.cdo.xu.groudd.backend.entity.member.MemberRepository;
import ph.cdo.xu.groudd.backend.entity.member.MemberService;

@SpringBootTest
public class MemberTest {

    private final MemberService memberService;
    private final MemberRepository memberRepository;

    @Autowired
    public MemberTest(MemberService memberService, MemberRepository memberRepository) {
        this.memberService = memberService;
        this.memberRepository = memberRepository;
    }

    @AfterEach
    void reset(){
        memberRepository.deleteAll();
    }


    @Test
    @DisplayName("This Test should throw False")
    void shouldReturnFalse(){
        Assertions.assertFalse(memberService.doesEmailExists("joshuagarrysalcedo12345678@gmail.com"));
    }

//    @Test
//    @DisplayName("This Test should return True for duplicate email")
//    void shouldReturnTrue(){
//        String firstName = "Joshua";
//        String lastName = "Salcedo";
//        String email = "joshuagarrysalcedo12345678@gmail.com";
//
//        memberService.add(Member.builder()
//                        .firstName(firstName)
//                        .lastName(lastName)
//                        .email(email)
//                .build());
//        Assertions.assertTrue(memberService.doesEmailExists("joshuagarrysalcedo12345678@gmail.com"));
//    }
}
