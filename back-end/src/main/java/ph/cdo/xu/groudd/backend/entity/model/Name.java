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
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Name name = (Name) o;
        return lastName.equalsIgnoreCase(name.lastName) && firstName.equalsIgnoreCase(name.firstName);
    }

    @Override
    public String toString() {
        String formattedFirstName = firstName.substring(0, 1).toUpperCase() + firstName.substring(1).toLowerCase();
        String formattedLastName = lastName.substring(0, 1).toUpperCase() + lastName.substring(1).toLowerCase();
        return String.format("%s, %s", formattedLastName, formattedFirstName );
    }
}
