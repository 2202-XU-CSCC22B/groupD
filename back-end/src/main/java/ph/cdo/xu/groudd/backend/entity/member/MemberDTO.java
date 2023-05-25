package ph.cdo.xu.groudd.backend.entity.member;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;
import org.springframework.lang.Nullable;
import ph.cdo.xu.groudd.backend.entity.model.enums.Gender;
import ph.cdo.xu.groudd.backend.entity.model.enums.Status;
import ph.cdo.xu.groudd.backend.entity.transaction.TransactionDTO;

import java.util.Date;
import java.util.List;

@Data
@Builder
public class MemberDTO {

    private Long id;

    @Column(name = "firstName")

    private String firstName;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "phone")
    private String phone;

    @Column(name = "email")
    private String email;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    @Builder.Default
    private String address = "Cagayan de Oro City";

    private double weight;
    private double height;

    private String name;
    private String occupation;
    @Temporal(TemporalType.DATE)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")

    private Date birthday;


    private List<TransactionDTO> transactions;
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
    @Builder.Default
    private Status membershipStatus = Status.UNVERIFIED;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    private Status monthlySubscriptionStatus = Status.UNVERIFIED;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    private Status studentStatus = Status.UNVERIFIED;


}
