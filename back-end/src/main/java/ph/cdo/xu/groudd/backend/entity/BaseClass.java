package ph.cdo.xu.groudd.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@ToString
@Getter
@Setter
public class BaseClass {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long Id;


}
