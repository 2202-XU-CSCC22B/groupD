package ph.cdo.xu.groudd.backend.entity.transaction;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.CreationTimestamp;
import org.joda.time.DateTime;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import ph.cdo.xu.groudd.backend.entity.member.Member;

import java.time.LocalDateTime;

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
    private DateTime date;
    private String description;
    private String paymentMethod;
    private TransactionType transactionType;

    private Double value;






}
