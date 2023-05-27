package ph.cdo.xu.groudd.backend.utils;

import org.springframework.lang.Nullable;
import org.springframework.stereotype.Service;
import ph.cdo.xu.groudd.backend.entity.model.enums.Status;

import java.util.Date;

@Service
public class StatusService {

    public  Status checkStatus(@Nullable Date startDate, @Nullable Date endDate, Status membershipStatus){
        if(membershipStatus == Status.UNVERIFIED && startDate == null){
            return Status.UNVERIFIED;
        }
        else {
            if(startDate == null){
                return Status.INACTIVE;
            }
            if(startDate.before(endDate)){
                    return Status.ACTIVE;
                }else{
                {
                    return Status.INACTIVE;
                }
            }
        }

    }
}
