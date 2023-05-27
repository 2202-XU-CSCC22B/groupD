package ph.cdo.xu.groudd.backend.utils;

import org.joda.time.DateTime;
import org.joda.time.Months;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class DateService {

    public Date addMonthsToDate(Date date, int monthsToAdd){
        DateTime dateTime = new DateTime(date);
        DateTime newDate = dateTime.plusMonths(monthsToAdd);
        return newDate.toDate();
    }
}
