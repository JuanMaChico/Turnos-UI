import { useState, useEffect } from "react";
import { Root, TooltipText, AvatarItem } from "./SelectAvatar.styles";
import foto from "../../assets/Avatar.png";
import { getEmployees } from "../../services/appointmentService";
import { useSelector, useDispatch } from 'react-redux';
import { setAppointmentEmployee } from "../../redux/reducers/appointmentReducer";


const SelectAvatar = () => {
	let data = [];
	
	const [stateData, setStateData ] = useState(data);
	const dispatch = useDispatch();
	const employee = useSelector((state) => state.appointmentDate.employee)

	useEffect(() => {

		async function getEmployeeList() {
			let result = await getEmployees({store: {id: 2}})
			console.log(result)
			setStateData(result.data)
		}
		getEmployeeList()

	}, [])
	
	const handleSelect = ( e ) => {

		stateData.find((element, index ) => {

			if(element.name === e.target.alt){
				element.selected = !element.selected
			}
			dispatch(setAppointmentEmployee(element))
		})
	};

	return (
		<Root>
			{stateData.map(( index , item ) => (
				<TooltipText key={item} title={index.name}>
					<AvatarItem
						onClick={handleSelect}
						selected={index.selected}
						alt={index.name}
						src={foto}
					/>
				</TooltipText>
			))}
		</Root>
	);
};

export default SelectAvatar;
