package ph.cdo.xu.groudd.backend.entity.staff;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import ph.cdo.xu.groudd.backend.entity.model.Person;
import ph.cdo.xu.groudd.backend.entity.model.enums.Position;
import ph.cdo.xu.groudd.backend.entity.model.enums.Status;
import ph.cdo.xu.groudd.backend.entity.transaction.Transaction;
import ph.cdo.xu.groudd.backend.entity.user.User;

import java.util.ArrayList;
import java.util.Date;
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
public class Staff extends Person {
    @Id
    @SequenceGenerator(
            name = "staff_sequence",
            sequenceName = "staff_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "staff_sequence"
    )
    private Long id;

    @Enumerated(EnumType.STRING)
    private Position position;


    @Temporal(TemporalType.DATE)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date dateStarted;


    @Enumerated(EnumType.STRING)
    private Status status;


    @OneToMany(mappedBy = "staff", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @Builder.Default
    @JsonManagedReference
    private List<Transaction> transactions = new ArrayList<>();

    @JsonIgnore
    public List<Transaction> getTransactions() {
        return transactions;
    }

    @JsonIgnore
    public void setTransactions(List<Transaction> transactions) {
        this.transactions = transactions;
    }

    public void addToChildren(Transaction transaction){
        transaction.setStaff(this);
        this.transactions.add(transaction);
    }


    @OneToOne(mappedBy = "staff")
    private User user;

    @Override
    public String toString() {
        return "Staff{" +
                "id=" + id +
                ", position=" + position +
                ", dateStarted=" + dateStarted +
                ", status=" + status +
                ", transactions=" + transactions.size() +
                '}';
    }
}
