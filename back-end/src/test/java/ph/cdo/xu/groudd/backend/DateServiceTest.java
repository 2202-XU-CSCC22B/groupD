package ph.cdo.xu.groudd.backend;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import ph.cdo.xu.groudd.backend.utils.DateService;

import java.util.Date;


@SpringBootTest
@ActiveProfiles("test")
public class DateServiceTest {

    private final DateService dateService;

    @Autowired

    public DateServiceTest(DateService dateService) {
        this.dateService = dateService;
    }

    @Test
    void shouldAddOneMonth(){
        Date date = new Date();
        Date addedDate = dateService.addMonthsToDate(date, 1);
        System.out.println("Old month " + date);
        System.out.println("New month " + addedDate);

        Assertions.assertNotEquals(date, addedDate);
    }
}
