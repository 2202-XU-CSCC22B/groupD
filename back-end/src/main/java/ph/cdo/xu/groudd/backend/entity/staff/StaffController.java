package ph.cdo.xu.groudd.backend.entity.staff;

import jakarta.mail.MessagingException;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ph.cdo.xu.groudd.backend.entity.model.enums.Position;
import ph.cdo.xu.groudd.backend.entity.transaction.TransactionDTO;
import ph.cdo.xu.groudd.backend.exceptions.EmailAlreadyExistsException;
import ph.cdo.xu.groudd.backend.utils.EmailService;
import ph.cdo.xu.groudd.backend.utils.PasswordService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/staff")
@CrossOrigin
@AllArgsConstructor
public class StaffController {
    private final StaffService staffService;
    private final EmailService emailService;
    private final PasswordService passwordService;


    @GetMapping("/test")
    public  String test(){
        return "Test STAFF CONTROLLER";
    }

    @GetMapping("/all")
    ResponseEntity<Map<String, Object>> getAllStaff(){
        Map<String, Object> objectMap = new HashMap<>();
        objectMap.put("all", staffService.getAllStaff());
        objectMap.put("owner", staffService.getStaffByPosition(Position.Owner));
        objectMap.put("staff", staffService.getStaffByPosition(Position.Staff));
        objectMap.put("trainer", staffService.getStaffByPosition(Position.Trainer));
        return ResponseEntity.ok(objectMap);
    }

    @PutMapping(value = "update/{id}", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<Map<String, Object>> updateStaff(@PathVariable Long id , @RequestBody StaffDTO staffDTO){
        Map<String, Object> objectMap = new HashMap<>();
        StaffDTO old = staffService.getStaffByID(id);
        objectMap.put("oldValue", old);
        Staff staff = staffService.updateStaff(old.getId(), staffDTO);
        objectMap.put("newValue", staffService.entityToDTO(staff));
        objectMap.put("message", "Staff has been updated!");

        return ResponseEntity.ok(objectMap);
    }

    @PostMapping(value = "/new", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<Map<String, Object>> newStaff(@RequestBody StaffDTO staffDTO) throws MessagingException {
        if(staffService.doesStaffEmailExists(staffDTO.getEmail())){
            throw new EmailAlreadyExistsException(staffDTO.getEmail() + " already exists!");
        }
        Map<String, Object> objectMap = new HashMap<>();
        objectMap.put("message", "An email has been sent to " + staffDTO.getEmail());
        objectMap.put("staff", staffService.entityToDTO(staffService.addStaff(staffDTO)));


        String randomPassword = passwordService.generatePassword(8);
        emailService.sendStaffRegistrationEmail(staffDTO.getEmail(), staffDTO.getFirstName(), randomPassword);
        return ResponseEntity.ok(objectMap);
    }

    @GetMapping("/{id}")
    ResponseEntity<Map<String, Object>> getAllStaff(@PathVariable Long id){
        StaffDTO staffDTO = staffService.getStaffByID(id);
        Map<String, Object> objectMap = new HashMap<>();


        objectMap.put("staff", staffDTO);
        return ResponseEntity.ok(objectMap);
    }


    @GetMapping(value = "/{id}/transactions", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, Object>> getAllTransactionByMemberID(
            @PathVariable Long id
    ){
        Map<String, Object> objectMap = new HashMap<>();
        List<TransactionDTO> transactionDTOList = staffService.getTransactionIDByStaff(id);
        double value = 0;
        for (TransactionDTO transactionDTO : transactionDTOList) {
            value += transactionDTO.getValue();
        }
        objectMap.put("transactions", transactionDTOList);
        objectMap.put("total", value);

        return ResponseEntity.ok(objectMap);

    }
}
