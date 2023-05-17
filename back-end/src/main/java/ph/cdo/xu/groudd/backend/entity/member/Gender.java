package ph.cdo.xu.groudd.backend.entity.member;

public enum Gender {
    MALE("Male"),
    FEMALE("Female"),
    OTHERS("Others");

    private String label;

    Gender(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }
}

