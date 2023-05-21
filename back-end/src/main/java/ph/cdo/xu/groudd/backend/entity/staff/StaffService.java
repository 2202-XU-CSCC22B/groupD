package ph.cdo.xu.groudd.backend.entity.staff;

import jakarta.transaction.Transactional;
import ph.cdo.xu.groudd.backend.entity.model.enums.Position;
import ph.cdo.xu.groudd.backend.entity.transaction.TransactionDTO;

import java.util.List;

public interface StaffService {

    Staff addStaff(StaffDTO staffDTO);
    boolean removeStaff(Long id);
    Staff updateStaff(Long id, StaffDTO staffDTO);

    List<StaffDTO> getAllStaff();

    StaffDTO getStaffByID(Long id);

    List<StaffDTO> getStaffByPosition(Position position);

    StaffDTO entityToDTO(Staff staff);
    Staff DtoToEntity(StaffDTO staffDTO);

    boolean doesStaffEmailExists(String email);

    @Transactional
    void addTransactionToStaff(Long staffID, TransactionDTO transactionDTO);


    List<TransactionDTO> getTransactionIDByStaff(Long staffID);

}
