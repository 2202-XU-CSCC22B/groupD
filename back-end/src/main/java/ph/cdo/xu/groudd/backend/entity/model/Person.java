package ph.cdo.xu.groudd.backend.entity.model;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.CreationTimestamp;
import ph.cdo.xu.groudd.backend.entity.model.enums.Gender;

import java.time.LocalDateTime;

@Getter
@Setter
@SuperBuilder
@MappedSuperclass
@AllArgsConstructor
@NoArgsConstructor

public  abstract class Person {

    @Column(updatable = false)
    @CreationTimestamp
    private LocalDateTime createdAt;
    @Embedded
    private Name name;

    @Embedded
    private ContactDetails contactDetails;

    @Embedded
    private BirthDetails birthDetails;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    private String address;
}
