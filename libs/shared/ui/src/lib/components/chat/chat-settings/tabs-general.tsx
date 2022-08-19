import { Control, Controller } from 'react-hook-form';
import Select from '../../forms/select/select';
import Slider from '../../forms/slider/slider';

export interface TabsGeneralProps {
  control: Control;
}

function TabsGeneral(props: TabsGeneralProps) {
  const { control } = props;

  return (
    <div>
      <Controller
        name="global.spaceBetweenMessages"
        control={control}
        defaultValue={0}
        render={({ field: { onChange } }) => (
          <Slider
            label="Space between message"
            max={100}
            min={0}
            className="mb-6 mt-6"
            onChange={(value) => onChange(value[0])}
          />
        )}
      />
      <Controller
        name="global.align"
        control={control}
        defaultValue="left"
        render={({ field: { onChange } }) => (
          <Select
            label="Alignment"
            options={[
              { label: 'Left', value: 'left' },
              { label: 'Center', value: 'center' },
              { label: 'Right', value: 'right' },
            ]}
            onChange={(value) => onChange(value?.value)}
            defaultValue={{ label: 'Left', value: 'left' }}
          />
        )}
      />
    </div>
  );
}

export default TabsGeneral;
