package ph.cdo.xu.groudd.backend.entity.transaction;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.joda.time.DateTime;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import ph.cdo.xu.groudd.backend.entity.member.Member;
import ph.cdo.xu.groudd.backend.entity.model.Person;
import ph.cdo.xu.groudd.backend.entity.model.enums.PaymentMethod;
import ph.cdo.xu.groudd.backend.entity.model.enums.TransactionType;
import ph.cdo.xu.groudd.backend.entity.staff.Staff;

import java.time.LocalDateTime;
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
public class Transaction {

    @Id
    @SequenceGenerator(
            name = "transaction_sequence",
            sequenceName = "transaction_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "transaction_sequence"
    )
    private Long id;
    @Column(updatable = false)
    @CreationTimestamp
    private LocalDateTime createdAt;
    @Temporal(TemporalType.DATE)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "MMM-dd-yyyy")
    private Date date;


    private String description;

    @Enumerated(EnumType.STRING)
    private PaymentMethod paymentMethod;

    @Enumerated(EnumType.STRING)
    private TransactionType transactionType;

    private Double value;
    @ManyToOne(fetch = FetchType.EAGER, optional = true, cascade = CascadeType.ALL)
    @JoinColumn(name = "member_id")
    @JsonBackReference
    private Member member;

    @ManyToOne(fetch = FetchType.EAGER, optional = true, cascade = CascadeType.ALL)
    @JoinColumn(name = "staff_id")
    @JsonBackReference
    private Staff staff;

    @Override
    public String toString() {
        return "Transaction{" +
                "id=" + id +
                ", createdAt=" + createdAt +
                ", date=" + date +
                ", description='" + description + '\'' +
                ", paymentMethod=" + paymentMethod +
                ", transactionType=" + transactionType +
                ", value=" + value +
                '}';
    }
}







