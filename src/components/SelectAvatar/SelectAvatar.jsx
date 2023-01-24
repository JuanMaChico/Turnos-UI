import { useState, useEffect } from "react";
import { Root, TooltipText, AvatarItem } from "./SelectAvatar.styles";
import foto from "../../assets/Avatar.png";
import { getEmployees } from "../../services/appointmentService";
import { useSelector, useDispatch } from 'react-redux';
import { setAppointmentEmployee } from "../../redux/reducers/appointmentReducer";


const SelectAvatar = () => {
	let data = [];
	
	const [employeeList, setEmployeeList ] = useState(data);
	const [employeeSelected, setEmployeeSelected] = useState(0)
	const dispatch = useDispatch();
	const employee = useSelector((state) => state.appointmentDate.employee)
	
	useEffect(() => {

		async function getEmployeeList() {
			let result = await getEmployees({store: {id: 2}})
			setEmployeeList(result.data)
		}
		getEmployeeList()

	}, [])
	
	const handleSelect = ( e ) => {


		const newState = employeeList.map((employee) => {
			let fullName = employee.name + " " + employee.lastname; 
			if(fullName === e.target.alt){
				if(employeeSelected == employee.id_number) {
					setEmployeeSelected(0);
					dispatch(setAppointmentEmployee({}));
				} else {
					setEmployeeSelected(employee.id_number);
					dispatch(setAppointmentEmployee(employee));
				}
				
			} 
			return employee
		})
		setEmployeeList(newState)
	};
	return (
		<Root>
			{employeeList.map(( employee , index ) => (
				<TooltipText key={index} title={employee.name}>
					<AvatarItem
						onClick={handleSelect}
						selected={ employee.id_number == employeeSelected ? true : false }
						alt={employee.name + " " +  employee.lastname}
						src={foto}
					/>
				</TooltipText>
			))}
		</Root>
	);
};

export default SelectAvatar;
