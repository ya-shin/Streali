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
        render={({ field: { onChange, value } }) => (
          <Slider
            label="Space between message"
            max={100}
            min={0}
            className="mb-6 mt-6"
            onChange={(value) => onChange(value[0])}
            value={[value]}
          />
        )}
      />
      <Controller
        name="global.align"
        control={control}
        defaultValue="left"
        render={({ field: { onChange, value } }) => (
          <Select
            label="Alignment"
            options={[
              { label: 'Left', value: 'left' },
              { label: 'Center', value: 'center' },
              { label: 'Right', value: 'right' },
            ]}
            onChange={(value) => onChange(value?.value)}
            defaultValue={{
              label: value[0].toUpperCase() + value.substring(1),
              value: value,
            }}
            className="mb-3"
          />
        )}
      />
      <Controller
        name="global.layout"
        control={control}
        defaultValue="stack"
        render={({ field: { onChange, value } }) => (
          <Select
            label="Layout"
            options={[
              { label: 'Stack', value: 'stack' },
              { label: 'Inline', value: 'inline' },
            ]}
            onChange={(value) => onChange(value?.value)}
            defaultValue={{
              label: value[0].toUpperCase() + value.substring(1),
              value: value,
            }}
          />
        )}
      />
    </div>
  );
}

export default TabsGeneral;
