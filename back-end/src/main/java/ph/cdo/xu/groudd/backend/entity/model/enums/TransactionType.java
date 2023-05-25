package ph.cdo.xu.groudd.backend.entity.model.enums;

public enum TransactionType {
    Salary("Salary"),
    CashOut("Cash Out"),

    TrainerFee("Trainer Fee"),
    MuaythaiClass("Muay Thai Class"),
    Utilities("Utilities"),
    Maintenance("Maintenance"),
    MembershipFee("Membership Fee"),
    WalkInSession("Walk-in Session"),
    MonthlyFee("Monthly Fee"),
    CashIn("Cash-in"),
    MissingMoney("Missing Money");

    private final String stringValue;

    TransactionType(String stringValue) {
        this.stringValue = stringValue;
    }

    public String getStringValue() {
        return stringValue;
    }

    public static TransactionType fromString(String value) {
        for (TransactionType type : TransactionType.values()) {
            if (type.stringValue.equalsIgnoreCase(value)) {
                return type;
            }
        }
        throw new IllegalArgumentException("Invalid TransactionType: " + value);
    }
}

