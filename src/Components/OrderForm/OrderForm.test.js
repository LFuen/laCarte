import {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import OrderForm from './OrderForm'
import Enzyme from 'enzyme'

test('Should call onSubmit prop for valid form submission', () => {
    const order = {
        prim_add: 'houseadd',
        sec_add: 'apartment',
        city: 'city',
        state: 'state',
        zip: 'zip',
        phone: 'tel',
        meal: 'meal'
    }

    const meals =[{
        id: 1,
        meal_name: 'Grilled Cheese',
        img_url: 'https://grilledCheese.com',            
        ingredients: 'Cheese, Bread',
        chef: 'Melissa',
        cuisine_id: 1
    },
    {
        id: 2,
        meal_name: 'Burger',
        img_url: 'https://burger.com',            
        ingredients: 'Cheese, Bread, Meat',
        chef: 'Greg',
        cuisine_id: 2
    }]


  
    Enzyme.configure({ adapter: new Adapter() })
    const onSubmitSpy = jest.fn();
  
    const wrapper = shallow(
      <OrderForm order={order} meals={meals} onSubmit={onSubmitSpy} />
    );
  
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
  
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        prim_add: order.houseadd,
        sec_add: order.apartment,
        city: order.city,
        state: order.state,
        zip: order.zip,
        phone: order.tel,
        meal: order.meal
    });
  });