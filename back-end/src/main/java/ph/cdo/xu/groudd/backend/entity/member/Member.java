package ph.cdo.xu.groudd.backend.entity.member;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import ph.cdo.xu.groudd.backend.entity.model.Person;
import ph.cdo.xu.groudd.backend.entity.transaction.Transaction;

import java.util.ArrayList;
import java.util.List;

@Getter
@ToString
@Setter
@Entity
@Table
@SuperBuilder
@EnableJpaAuditing
@AllArgsConstructor
@NoArgsConstructor
public class Member extends Person {

    @Id
    @SequenceGenerator(
            name = "member_sequence",
            sequenceName = "member_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "member_sequence"
    )
    private Long id;
    private double weight;
    private double height;

    private String occupation;

    @Embedded
    private MembershipDetails membershipDetails;




    public Member copyFields(Member source) {
        this.setName(source.getName());
        this.setAddress(source.getAddress());
        this.setGender(source.getGender());
        this.setBirthDetails(source.getBirthDetails());
        this.setContactDetails(source.getContactDetails());
        this.setOccupation(source.getOccupation());
        this.setWeight(source.getWeight());
        this.setHeight(source.getHeight());
        this.getMembershipDetails().copyFrom(source.getMembershipDetails());
        return this;
    }


//    @JsonManagedReference
//    @OneToMany(
//            mappedBy = "member",
//            targetEntity = Transaction.class,
//            fetch = FetchType.EAGER,
//            cascade = CascadeType.ALL,
//            orphanRemoval = true)
//    private List<Transaction> students = new ArrayList<>();
}
