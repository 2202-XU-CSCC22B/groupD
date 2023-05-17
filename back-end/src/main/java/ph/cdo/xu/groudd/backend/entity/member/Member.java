package ph.cdo.xu.groudd.backend.entity.member;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import ph.cdo.xu.groudd.backend.entity.model.Person;

@Getter
@ToString
@Setter
@Entity
@Table
@SuperBuilder
@EnableJpaAuditing
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
public class Member extends Person {

    @Id
    @SequenceGenerator(
            name = "member_sequence",
            sequenceName = "student_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "student_sequence"
    )
    private Long id;
    private double weight;
    private double height;

    private String occupation;

    @Embedded
    private MembershipDetails membershipDetails;




    public void copyFields(Member source) {
        setName(source.getName());
        setAddress(source.getAddress());
        setGender(source.getGender());
        setBirthDetails(source.getBirthDetails());
        setContactDetails(source.getContactDetails());
        setOccupation(source.getOccupation());
        setWeight(source.getWeight());
        setHeight(source.getHeight());
        setMembershipDetails(source.getMembershipDetails());

    }
}
