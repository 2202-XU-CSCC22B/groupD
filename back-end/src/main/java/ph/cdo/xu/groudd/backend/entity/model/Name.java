package ph.cdo.xu.groudd.backend.entity.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.*;

@Embeddable
@Getter
@Setter
@Builder
@AllArgsConstructor
@EqualsAndHashCode
public class Name {
    @Column(name = "firstName")
    private String firstName;

    @Column(name = "lastName")
    private String lastName;

    public Name() {
    }

    @Override
    public String toString() {
        return String.format("%s %s", getFirstName(), getLastName());
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Name name = (Name) o;
        return firstName.equalsIgnoreCase(name.firstName) && lastName.equalsIgnoreCase(name.lastName);
    }


}
