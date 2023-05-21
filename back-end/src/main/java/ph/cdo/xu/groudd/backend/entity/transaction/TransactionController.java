package ph.cdo.xu.groudd.backend.entity.transaction;

import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ph.cdo.xu.groudd.backend.entity.member.MemberService;
import ph.cdo.xu.groudd.backend.entity.staff.StaffService;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/transaction")
@CrossOrigin
@AllArgsConstructor
public class TransactionController {

    private final TransactionService transactionService;
    private final MemberService memberService;
    private final StaffService staffService;


    @GetMapping("/test")
    public String test(){
        return "Test STAFF CONTROLLER";
    }

    @GetMapping("/all")
    public ResponseEntity<Map<String, Object>> getAllTransactions(){
        Map<String, Object> objectMap = new HashMap<>();
        List<TransactionDTO> transactionDTOList = transactionService.getAllDtoTransactions();

        objectMap.put("transactions", transactionDTOList);
        objectMap.put("summary", transactionService.getTransactionSummary(transactionService.getAllTransactions()));

        return ResponseEntity.ok(objectMap);
    }

    @GetMapping("/{month}")
    public ResponseEntity<Map<String,Object>> getAllTransactionByMonth(
            @PathVariable @RequestBody int month){
        Map<String, Object> objectMap = new HashMap<>();
        List<Transaction> transactionList = transactionService.transactionsByMonth(month);

        objectMap.put("transactions", transactionList);
        objectMap.put("summary", transactionService.getTransactionSummary(transactionList));



        return ResponseEntity.ok(objectMap);
        }

    @PostMapping(value = "/new", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, Object>> addNewTransaction(@RequestBody TransactionDTO transactionDTO){
        Map<String, Object> objectMap = new HashMap<>();
        if(transactionDTO.getMemberID() != null){
           memberService.addTransactionToMember(transactionDTO.getMemberID(), transactionDTO);
        }else if(transactionDTO.getStaffID() != null){
            staffService.addTransactionToStaff(transactionDTO.getStaffID(), transactionDTO);
        }else{
            Transaction transaction = transactionService.newTransaction(transactionDTO);
            TransactionDTO tempDTO = transactionService.entityToDTO(transaction);
            objectMap.put("transaction", tempDTO);

            return ResponseEntity.ok(objectMap);
        }


        objectMap.put("transaction", transactionDTO);
        return ResponseEntity.ok(objectMap);

    }

}
