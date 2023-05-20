package ph.cdo.xu.groudd.backend.entity.staff;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import ph.cdo.xu.groudd.backend.entity.model.BirthDetails;
import ph.cdo.xu.groudd.backend.entity.model.ContactDetails;
import ph.cdo.xu.groudd.backend.entity.model.Name;
import ph.cdo.xu.groudd.backend.entity.model.enums.Position;
import ph.cdo.xu.groudd.backend.exceptions.EmailAlreadyExistsException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class StaffServiceImpl implements StaffService {

    private final StaffRepository staffRepository;
    @Override
    public Staff addStaff(StaffDTO staffDTO) {
        if(staffRepository.existsByContactDetailsEmail(staffDTO.getEmail())){
            throw new EmailAlreadyExistsException(staffDTO.getEmail() + " already exists!");
        }


        Staff staff = DtoToEntity(staffDTO);

        System.out.println("New staff created! "  + staff.toString());

        return staffRepository.saveAndFlush(staff);
    }

    @Override
    public boolean removeStaff(Long id) {
        Optional<Staff> optionalStaff = staffRepository.findById(id);
        if(optionalStaff.isPresent()){
            staffRepository.deleteById(optionalStaff.get().getId());
        }else{
            throw new RuntimeException("Staff not found!");
        }

        return false;
    }

    @Override
    public Staff updateStaff(Long id, StaffDTO staffDTO) {
        Optional<Staff> optionalStaff = staffRepository.findById(id);
        if(optionalStaff.isPresent()){
            String oldEmail = optionalStaff.get().getContactDetails().getEmail();
            if(!oldEmail.equals(staffDTO.getEmail()) && staffRepository.existsByContactDetailsEmail(staffDTO.getEmail())){
                throw new RuntimeException("Email already exists!");
            }
            Staff staff = optionalStaff.get();
            staff.getName().setLastName(staffDTO.getLastName().toLowerCase().trim());
            staff.getName().setFirstName(staffDTO.getFirstName().toLowerCase().trim());
            staff.getContactDetails().setEmail(staffDTO.getEmail().trim().toLowerCase());
            staff.getContactDetails().setPhone(staffDTO.getPhone());
            staff.setGender(staff.getGender());
            staff.setPosition(staff.getPosition());
            staff.getBirthDetails().setBirthday(staffDTO.getBirthday());
            staff.setDateStarted(staffDTO.getDateStarted());
            staff.setStatus(staff.getStatus());

            return staffRepository.saveAndFlush(staff);
        }else{
            throw new RuntimeException("Staff not found!");
        }

    }

    @Override
    public List<StaffDTO> getAllStaff() {
       List<StaffDTO> staffDTOList = new ArrayList<>();
       List<Staff> staffList = staffRepository.findAll();

       for(Staff s : staffList){
           staffDTOList.add(entityToDTO(s));
       }

       return staffDTOList;
    }

    @Override
    public StaffDTO getStaffByID(Long id) {
        Optional<Staff> optionalStaff = staffRepository.findById(id);
        if(optionalStaff.isPresent()){
            return entityToDTO(optionalStaff.get());
        }else{
            throw new RuntimeException("Staff not found!");
        }

    }

    @Override
    public List<StaffDTO> getStaffByPosition(Position position) {

        return getAllStaff().stream()
                .filter(staffDTO -> staffDTO.getPosition() == position)
                .collect(Collectors.toList());
    }

    @Override
    public StaffDTO entityToDTO(Staff staff) {
          return StaffDTO
                  .builder()
                  .id(staff.getId())
                  .firstName(staff.getName().getFirstName().toLowerCase())
                  .lastName(staff.getName().getLastName().toLowerCase())
                  .phone(staff.getContactDetails().getPhone())
                  .email(staff.getContactDetails().getEmail().toLowerCase())
                  .gender(staff.getGender())
                  .address(staff.getAddress())
                  .position(staff.getPosition())
                  .dateStarted(staff.getDateStarted())
                  .status(staff.getStatus())
                  .build();

    }

    @Override
    public Staff DtoToEntity(StaffDTO staffDTO) {
        return Staff.builder()
                .id(staffDTO.getId())
                .position(staffDTO.getPosition())
                .dateStarted(staffDTO.getDateStarted())
                .status(staffDTO.getStatus())
                .name(Name
                        .builder()
                        .firstName(staffDTO.getFirstName().trim().toLowerCase())
                        .lastName(staffDTO.getLastName().trim().toLowerCase())
                        .build())
                .contactDetails(ContactDetails
                        .builder()
                        .phone(staffDTO.getPhone())
                        .email(staffDTO.getEmail().trim().toLowerCase())
                        .build())
                .birthDetails(
                        BirthDetails
                                .builder()
                                .birthday(staffDTO.getBirthday())
                                .build())
                .gender(staffDTO.getGender())
                .address(staffDTO.getAddress())
                .build();


    }

    @Override
    public boolean doesStaffEmailExists(String email) {
        return staffRepository.existsByContactDetailsEmail(email);
    }
}
