package ph.cdo.xu.groudd.backend.entity.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.*;

@Embeddable
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ContactDetails {
    @Column(name = "phone")
    private String phone;

    @Column(name = "email")
    private String email;


}
