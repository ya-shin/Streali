import { Controller } from 'react-hook-form';
import FontSelect from '../../forms/font-select/font-select';
import Select from '../../forms/select/select';
import Slider from '../../forms/slider/slider';

export interface TabsGeneralProps {
  control: any;
}

function TabsGeneral(props: TabsGeneralProps) {
  const { control } = props;

  return (
    <div>
      <Controller
        name="space_between_messages"
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
        name="global_font"
        control={control}
        defaultValue="Roboto"
        render={({ field: { onChange } }) => (
          <FontSelect
            label="Font (with Google Fonts)"
            className="mb-3"
            onChange={(value) => onChange(value?.value)}
          />
        )}
      />
      <Controller
        name="global_align"
        control={control}
        defaultValue="left"
        render={({ field: { onChange } }) => (
          <Select
            label="Alignment"
            options={[
              { label: 'Left', value: 'left' },
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
