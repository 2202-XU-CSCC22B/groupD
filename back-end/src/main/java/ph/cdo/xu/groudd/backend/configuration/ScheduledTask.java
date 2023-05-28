package ph.cdo.xu.groudd.backend.configuration;

import lombok.AllArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import ph.cdo.xu.groudd.backend.entity.member.Member;
import ph.cdo.xu.groudd.backend.entity.member.MemberRepository;
import ph.cdo.xu.groudd.backend.entity.member.MemberService;
import ph.cdo.xu.groudd.backend.utils.StatusService;

import java.util.ArrayList;
import java.util.List;

@Component
@AllArgsConstructor
public class ScheduledTask {

    private MemberService memberService;
    private StatusService statusService;
    private MemberRepository memberRepository;
    @Scheduled(cron = "0 0 0 * * ?", zone = "Asia/Manila")
    public void runAtMidnightEveryDay() {
            List<Member> memberList = memberService.allMembers();

            for(int i = 0; i < memberList.size(); i++){
                Member member = memberList.get(i);

                member.getMembershipDetails().setStudentStatus(
                        statusService.checkStatus(
                                member.getMembershipDetails().getStudentStartDate(),
                                member.getMembershipDetails().getStudentEndDate(),
                                member.getMembershipDetails().getStudentStatus()
                        )
                );

                member.getMembershipDetails().setMembershipStatus(
                        statusService.checkStatus(
                                member.getMembershipDetails().getMembershipStartDate(),
                                member.getMembershipDetails().getMembershipEndDate(),
                                member.getMembershipDetails().getMembershipStatus()
                        )
                );
                member.getMembershipDetails().setMonthlySubscriptionStatus(
                        statusService.checkStatus(
                                member.getMembershipDetails().getMonthlySubscriptionStartDate(),
                                member.getMembershipDetails().getMonthlySubscriptionEndDate(),
                                member.getMembershipDetails().getMonthlySubscriptionStatus()
                        )
                );
                memberRepository.save(member);
            }
    }
}
