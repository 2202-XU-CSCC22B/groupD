package ph.cdo.xu.groudd.backend.entity.member;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.*;
import ph.cdo.xu.groudd.backend.entity.model.enums.Status;

import java.util.Date;


@Embeddable
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MembershipDetails {

    @Temporal(TemporalType.DATE)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date membershipStartDate;

    @Temporal(TemporalType.DATE)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date membershipEndDate;
    @Temporal(TemporalType.DATE)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date monthlySubscriptionStartDate;
    @Temporal(TemporalType.DATE)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date monthlySubscriptionEndDate;

    @Temporal(TemporalType.DATE)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date studentStartDate;

    @Temporal(TemporalType.DATE)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")

    private Date studentEndDate;


    @Enumerated(EnumType.STRING)
    private Status membershipStatus = Status.UNVERIFIED;

    @Enumerated(EnumType.STRING)
    private Status monthlySubscriptionStatus = Status.UNVERIFIED;

    @Enumerated(EnumType.STRING)
    private Status studentStatus = Status.UNVERIFIED;


    public void copyFrom(MembershipDetails source) {
        this.membershipStartDate = source.getMembershipStartDate();
        this.membershipEndDate = source.getMembershipEndDate();
        this.monthlySubscriptionStartDate = source.getMonthlySubscriptionStartDate();
        this.monthlySubscriptionEndDate = source.getMonthlySubscriptionEndDate();
        this.studentStartDate = source.getStudentStartDate();
        this.studentEndDate = source.getStudentEndDate();
        this.membershipStatus = source.getMembershipStatus();
        this.monthlySubscriptionStatus = source.getMonthlySubscriptionStatus();
        this.studentStatus = source.getStudentStatus();
    }
}
