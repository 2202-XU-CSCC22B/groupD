package ph.cdo.xu.groudd.backend;

import com.github.javafaker.Faker;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import ph.cdo.xu.groudd.backend.entity.model.enums.Gender;
import ph.cdo.xu.groudd.backend.entity.model.enums.Position;
import ph.cdo.xu.groudd.backend.entity.model.enums.Status;
import ph.cdo.xu.groudd.backend.entity.staff.*;
import ph.cdo.xu.groudd.backend.exceptions.EmailAlreadyExistsException;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;

@SpringBootTest
public class StaffServiceTest {

    private final StaffService staffService;
    private final StaffRepository staffRepository;

    private final Faker faker;

    @Autowired
    public StaffServiceTest(StaffService staffService, StaffRepository staffRepository, Faker faker) {
        this.staffService = staffService;
        this.staffRepository = staffRepository;
        this.faker = faker;
    }

    @BeforeEach
    void initialize(){
        staffRepository.deleteAll();
    }

    @AfterEach
    void reset(){
        staffRepository.deleteAll();
    }


    @Test
    void testingAddStaff(){


        Assertions.assertEquals(0, staffRepository.findAll().size());


        StaffDTO staffDTO = StaffDTO.builder()
                .firstName("John")
                .lastName("Doe")
                .phone("1234567890")
                .email("john.doe@example.com")
                .gender(Gender.MALE)
                .address("Cagayan de Oro City")
                .position(Position.Trainer)
                .birthday(new Date())
                .dateStarted(new Date())
                .status(Status.ACTIVE)
                .build();

        System.out.println(staffDTO);
        staffService.addStaff(staffDTO);
        Assertions.assertEquals(1, staffRepository.findAll().size());
        Assertions.assertNotNull(staffDTO);


        Assertions.assertThrows(EmailAlreadyExistsException.class, ()->{
           staffService.addStaff(staffDTO);
           staffService.addStaff(staffDTO);
        });

    }


    @Test
    void testingRemovingStaff(){
        Assertions.assertEquals(0, staffRepository.findAll().size());


        StaffDTO staffDTO = StaffDTO.builder()
                .firstName("John")
                .lastName("Doe")
                .phone("1234567890")
                .email("john.doe@example.com")
                .gender(Gender.MALE)
                .address("Cagayan de Oro City")
                .position(Position.Trainer)
                .birthday(new Date())
                .dateStarted(new Date())
                .status(Status.ACTIVE)
                .build();

        System.out.println(staffDTO);
        Staff staff = staffService.addStaff(staffDTO);
        Assertions.assertEquals(1, staffRepository.findAll().size());
        Assertions.assertNotNull(staffDTO);

        staffService.removeStaff(staff.getId());



        Assertions.assertEquals(0, staffRepository.findAll().size());


        Assertions.assertThrows(RuntimeException.class, ()->{
            staffService.removeStaff(29L);

        });

    }


    @Test
    void testingUpdateStaff() {

        StaffDTO staffDTO = StaffDTO.builder()
                .firstName("John")
                .lastName("Doe")
                .phone("1234567890")
                .email("john.doe@example.com")
                .gender(Gender.MALE)
                .address("Cagayan de Oro City")
                .position(Position.Trainer)
                .birthday(new Date())
                .dateStarted(new Date())
                .status(Status.ACTIVE)
                .build();

        System.out.println(staffDTO);
        Staff staff = staffService.addStaff(staffDTO);
        Assertions.assertEquals(1, staffRepository.findAll().size());
        Assertions.assertNotNull(staff);


        staffDTO = StaffDTO.builder()
                .firstName("swaswa")
                .lastName("Doe")
                .phone("1234567890")
                .email("john.doe@example.com")
                .gender(Gender.MALE)
                .address("Cagayan de Oro City")
                .position(Position.Trainer)
                .birthday(new Date())
                .dateStarted(new Date())
                .status(Status.ACTIVE)
                .build();

        staff = staffService.updateStaff(staff.getId(), staffDTO);

        Assertions.assertEquals("swaswa", staff.getName().getFirstName());

    }

    @Test
    void testingGetAllStaff(){
        for (int i = 0; i < 5; i++) {
            StaffDTO staffDTO = StaffDTO.builder()
                    .firstName(faker.name().firstName())
                    .lastName(faker.name().lastName())
                    .phone(faker.phoneNumber().cellPhone())
                    .email(faker.internet().emailAddress())
                    .gender(Gender.values()[faker.random().nextInt(Gender.values().length)])
                    .address("Cagayan de Oro City")
                    .position(Position.values()[faker.random().nextInt(Position.values().length)])
                    .birthday(faker.date().birthday())
                    .dateStarted(faker.date().past(365, TimeUnit.HOURS))
                    .status(Status.values()[faker.random().nextInt(Status.values().length)])
                    .build();

            System.out.println(staffDTO);
            staffService.addStaff(staffDTO);
        }

        List<StaffDTO> staffDTOList = staffService.getAllStaff();
        Assertions.assertNotNull(staffDTOList);
        Assertions.assertEquals(5, staffDTOList.size());
    }

    @Test
    void testingTheGetStaffByPosition(){
        List<Position> positions = new ArrayList<>();
        positions.add(Position.Owner);
        positions.add(Position.Owner);
        positions.add(Position.Trainer);
        positions.add(Position.Trainer);
        positions.add(Position.Trainer);
        positions.add(Position.Staff);
        positions.add(Position.Staff);
        positions.add(Position.Staff);
        positions.add(Position.Staff);
        positions.add(Position.Staff);

        for (int i = 0; i < 10; i++) {


            StaffDTO staffDTO = StaffDTO.builder()
                    .firstName(faker.name().firstName())
                    .lastName(faker.name().lastName())
                    .phone(faker.phoneNumber().cellPhone())
                    .email(faker.internet().emailAddress())
                    .gender(Gender.values()[faker.random().nextInt(Gender.values().length)])
                    .address("Cagayan de Oro City")
                    .position(positions.get(i))
                    .birthday(faker.date().birthday())
                    .dateStarted(faker.date().past(365, TimeUnit.DAYS))
                    .status(Status.values()[faker.random().nextInt(Status.values().length)])
                    .build();

            System.out.println(staffDTO);
            staffService.addStaff(staffDTO);
        }

        List<StaffDTO> staffOwner = staffService.getStaffByPosition(Position.Owner);
        Assertions.assertNotNull(staffOwner);
        Assertions.assertEquals(2, staffOwner.size());

        List<StaffDTO> staffTrainer = staffService.getStaffByPosition(Position.Trainer);
        Assertions.assertNotNull(staffTrainer);
        Assertions.assertEquals(3, staffTrainer.size());

        List<StaffDTO> staffStaff = staffService.getStaffByPosition(Position.Staff);
        Assertions.assertNotNull(staffStaff);
        Assertions.assertEquals(5, staffStaff.size());
    }
}


