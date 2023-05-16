package ph.cdo.xu.groudd.backend.entity.member;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.Date;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @NotNull(message = "First name is required")
    @NotEmpty(message = "First name is required")
    private String firstName;

    @NotNull(message = "Last name is required")
    @NotEmpty(message = "Last name is required")
    private String lastName;

    @NotNull(message = "Email is required")
    @NotEmpty(message = "Email is required")
    @Email(message = "Email must be valid")
    private String email;
    private String brgy;
    private double weight;
    private double height;
    private String contactNumber;
    private String occupation;

    private Date birthday;
    private Date startDate;
    private Date expirationDate;
    private boolean isActive;
    private MembershipStatus membershipStatus;
}
