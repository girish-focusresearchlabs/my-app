import React, { useState, useRef, Fragment } from "react";
import { Pressable, ScrollView, StyleSheet } from "react-native";
import {
  Assets,
  Colors,
  View,
  Text,
  Button,
  Checkbox,
  CheckboxRef,
  Chip,
  Image,
  Spacings,
  Typography,
  ColorSliderGroup,
  GradientSlider,
  Slider,
  Icon,
} from "react-native-ui-lib";
import { Alert } from "react-native";

const checkmark = require("../../assets/check-small.png");
const chevron = require("../../assets/chevronDown.png");
const bell = require("../../assets/bell.png");
const avatarImage = {
  uri: "https://randomuser.me/api/portraits/women/24.jpg",
};
const INITIAL_VALUE = 20;
const RANGE_INITIAL_MIN = 0;
const RANGE_INITIAL_MAX = 100;
const COLOR = Colors.blue30;
const TabTwoScreen = () => {
  // checkbox
  const [value1, setValue1] = useState(false);
  const [value2, setValue2] = useState(false);
  const [value3, setValue3] = useState(true);
  const [value4, setValue4] = useState(true); // not used in UI, but kept for parity
  const [value5, setValue5] = useState(false);
  const [value6, setValue6] = useState(false);
  const [value7, setValue7] = useState(false);
  const [validationText, setValidationText] = useState("");
  const [validationColor, setValidationColor] = useState(Colors.$textDefault);

  const checkbox = useRef<CheckboxRef>(null);

  const onPress = () => {
    checkbox.current?.validate();
  };

  const onValueChange = (value: boolean) => {
    setValue7(value);
    console.log("onValueChange: ", value);
  };

  const onChangeValidity = (value?: boolean) => {
    setValidationText(String(value));
    setValidationColor(
      value === true ? Colors.$textSuccess : Colors.$textDangerLight
    );
  };
  // checkbox
  //chip

  const colors = [
    { value: Colors.red10, label: "Red" },
    { value: Colors.blue10, label: "Blue" },
    { value: Colors.purple10, label: "Purple" },
    { value: Colors.green10, label: "Green" },
    { value: Colors.yellow10, label: "Yellow" },
  ];

  const [selectedValue, setSelectedValue] = useState(colors[2].label);

  const renderExample = (text: string, chip: JSX.Element) => {
    return (
      <View row marginB-12>
        {chip}
        <Text marginL-12 text70 $textDefault>
          {text}
        </Text>
      </View>
    );
  };
  //chip
  //slider
  const [alpha, setAlpha] = useState(1);
  const [color, setColor] = useState(COLOR);
  const [sliderValue, setSliderValue] = useState(INITIAL_VALUE);
  const [sliderMinValue, setSliderMinValue] = useState(RANGE_INITIAL_MIN);
  const [sliderMaxValue, setSliderMaxValue] = useState(RANGE_INITIAL_MAX);
  const [sliderMinValue2, setSliderMinValue2] = useState(25);
  const [sliderMaxValue2, setSliderMaxValue2] = useState(80);
  const [forceLTR, setForceLTR] = useState(false);

  const slider = useRef(null);
  const rangeSlider = useRef(null);
  const gradientSlider = useRef(null);

  
  const onSliderRangeChange = (values:any) => {
    const { min, max } = values;
    setSliderMinValue(min);
    setSliderMaxValue(max);
  };

  const onSliderRangeChange2 = (values: any) => {
    const { min, max } = values;
    setSliderMinValue2(min);
    setSliderMaxValue2(max);
  };

  const onSliderValueChange = (value: any) => {
    setSliderValue(value);
  };

  const onSliderReset = () => {
    setSliderValue(INITIAL_VALUE);
  };

  const onRangeSliderReset = () => {
    setSliderMinValue(RANGE_INITIAL_MIN);
    setSliderMaxValue(RANGE_INITIAL_MAX);
  };

  const onGradientValueChange = (value: any, alpha: any) => {
    setColor(value);
    setAlpha(alpha);
  };

  const getReverseStyle = () => {
    return forceLTR ? styles.ltr : null;
  };

  const renderDefaultSliderExample = () => (
    <Fragment>
      <View row centerV style={getReverseStyle()}>
        <Icon assetName={"search"} style={styles.image} />
        <Slider
          onValueChange={onSliderValueChange}
          value={INITIAL_VALUE}
          minimumValue={0}
          maximumValue={100}
          step={1}
          containerStyle={styles.sliderContainer}
          disableRTL={forceLTR}
          ref={slider}
          onReset={onSliderReset}
        />
        <Text bodySmall $textNeutral style={styles.text} numberOfLines={1}>
          ${sliderValue}
        </Text>
      </View>
    </Fragment>
  );

  

  const renderDisabledSliderExample = () => (
    <Fragment>
      <Text $textDefault text70BO marginT-20>
        Disabled
      </Text>
      <Slider
        minimumValue={100}
        maximumValue={200}
        value={120}
        containerStyle={styles.slider}
        disabled
      />
    </Fragment>
  );

  const renderRangeSliderExample = () => (
    <Fragment>
      <View row spread style={getReverseStyle()}>
        <Text bodySmall $textNeutral>
          min. {sliderMinValue}%
        </Text>
        <Text bodySmall $textNeutral>
          max. {sliderMaxValue}%
        </Text>
      </View>
      <Slider
        useRange
        onRangeChange={onSliderRangeChange}
        value={INITIAL_VALUE}
        minimumValue={0}
        maximumValue={100}
        step={1}
        disableRTL={forceLTR}
        ref={rangeSlider}
        onReset={onRangeSliderReset}
      />
    </Fragment>
  );

  const renderRangeSliderWithValuesExample = () => (
    <Fragment>
      <Text $textDefault text70BO marginV-15>
        Range w/ initial values and no default gap
      </Text>
      <View row spread style={getReverseStyle()}>
        <Text bodySmall $textNeutral>
          min. {sliderMinValue2}%
        </Text>
        <Text bodySmall $textNeutral>
          max. {sliderMaxValue2}%
        </Text>
      </View>
      <Slider
        useRange
        useGap={false}
        onRangeChange={onSliderRangeChange2}
        value={INITIAL_VALUE}
        minimumValue={0}
        maximumValue={100}
        step={1}
        disableRTL={forceLTR}
        initialMinimumValue={25}
        initialMaximumValue={80}
      />
    </Fragment>
  );

  const renderGradientSlidersExample = () => (
    <Fragment>
      <View row centerV>
        <Text text90 $textNeutral>
          DEFAULT
        </Text>
        <GradientSlider
          color={color}
          containerStyle={styles.gradientSliderContainer}
          onValueChange={onGradientValueChange}
          ref={gradientSlider}
        />
        <View style={styles.box}>
          <View style={{ flex: 1, backgroundColor: color, opacity: alpha }} />
        </View>
      </View>
      <View row centerV>
        <Text text90 $textNeutral>
          HUE
        </Text>
        <GradientSlider
          type={GradientSlider.types.HUE}
          color={COLOR}
          containerStyle={styles.gradientSliderContainer}
          onValueChange={onGradientValueChange}
        />
        <View style={styles.box}>
          <View style={{ flex: 1, backgroundColor: color }} />
        </View>
      </View>
    </Fragment>
  );

  const renderColorSliderGroupExample = () => (
    <Fragment>
      <ColorSliderGroup
        initialColor={color}
        sliderContainerStyle={styles.slider}
        containerStyle={styles.group}
        showLabels
      />
    </Fragment>
  );
  //slider

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View marginT-s10 margin-s4 flex padding-page>
        <Text marginB-20 text40 $textDefault>
          Checkbox
        </Text>
        <View row marginB-s5 centerV>
          <Checkbox value={value1} onValueChange={setValue1} />
          <Checkbox
            value={value2}
            onValueChange={setValue2}
            borderRadius={2}
            size={30}
            color={Colors.purple30}
            selectedIcon={Assets.icons.x}
            marginL-s5
          />
          <Checkbox
            value={value3}
            onValueChange={setValue3}
            borderRadius={5}
            size={18}
            color={Colors.grey10}
            iconColor={Colors.green10}
            marginL-s5
          />
        </View>
        <Checkbox
          value={value6}
          label={"With label"}
          color={Colors.green20}
          onValueChange={setValue6}
          containerStyle={styles.checkbox}
        />
        <Checkbox
          value={value7}
          onValueChange={setValue7}
          indeterminate
          label={"Indeterminate state"}
          color={Colors.green20}
          containerStyle={styles.checkbox}
        />

        <View marginT-20>
          <Text text60 $textDefault marginB-10>
            Validation
          </Text>
          <Text marginB-4 color={validationColor}>
            {validationText}
          </Text>
          <View row centerV spread marginB-10>
            <Checkbox
              required
              onChangeValidity={onChangeValidity}
              ref={checkbox}
              value={value7}
              onValueChange={onValueChange}
              label={"This is a checkbox"}
            />
            <Button size={"small"} label={"Validate"} onPress={onPress} />
          </View>
        </View>
        <Text marginB-20 text40 $textDefault>
          Chip
        </Text>

        {renderExample("Label", <Chip label={"Chip"} />)}
        {renderExample(
          "Label + onPress",
          <Chip label={"Chip"} onPress={() => Alert.alert("onPress")} />
        )}

        {renderExample(
          "Right icon",
          <Chip
            label={selectedValue}
            rightIconSource={chevron}
            iconStyle={{ margin: 8 }}
          />
        )}
        {renderExample(
          "Label + Avatar",
          <Chip
            label={"Chip"}
            avatarProps={{ source: avatarImage, size: 20 }}
          />
        )}

        {renderExample(
          "Label + Badge",
          <Chip
            label={"Chip"}
            badgeProps={{
              label: "4",
              backgroundColor: "red",
            }}
          />
        )}

        <View center row>
          <Chip
            label={"Chip"}
            labelStyle={{ color: Colors.green20 }}
            iconSource={checkmark}
            iconProps={{ tintColor: Colors.green20 }}
            containerStyle={{ borderColor: Colors.green20 }}
          />
          <Chip
            iconSource={checkmark}
            label={"Chip"}
            labelStyle={{ color: Colors.white }}
            iconProps={{ tintColor: Colors.white }}
            containerStyle={{
              borderColor: Colors.green20,
              backgroundColor: Colors.green20,
              marginLeft: Spacings.s3,
            }}
          />
          <Chip
            resetSpacings
            borderRadius={22}
            label={"Chip"}
            labelStyle={{
              color: Colors.red20,
              marginHorizontal: Spacings.s3,
              ...Typography.text70BO,
            }}
            iconStyle={{ width: 16, height: 16 }}
            avatarProps={{ source: avatarImage, size: 28 }}
            onDismiss={() => Alert.alert("onDismiss")}
            dismissIconStyle={{
              width: 10,
              height: 10,
              marginRight: Spacings.s3,
            }}
            dismissColor={Colors.red20}
            containerStyle={{
              borderColor: Colors.red20,
              borderBottomRightRadius: 0,
              marginLeft: Spacings.s3,
            }}
          />
          <Chip
            resetSpacings
            label={"Chip"}
            labelStyle={{ marginRight: Spacings.s1 }}
            badgeProps={{
              label: "44",
              backgroundColor: Colors.$backgroundDefault,
              borderWidth: 2,
              borderColor: Colors.$backgroundInverted,
              labelStyle: { color: Colors.$textDefault },
            }}
            containerStyle={{
              borderWidth: 0,
              marginLeft: Spacings.s3,
            }}
          />
        </View>
        <View center row marginT-10>
          <Chip
            rightElement={
              <Image
                tintColor={Colors.yellow30}
                source={bell}
                width={24}
                height={24}
              />
            }
            label={"Chip"}
          />
        </View>
      </View>
      <View flex padding-20>
        <Text marginB-20 text40 $textDefault>
          Checkbox
        </Text>
        {/* <View row spread centerV marginB-10>
          <Button link label="Reset" onPress={resetSlider} />
        </View> */}

        {renderDefaultSliderExample()}
        {renderRangeSliderExample()}
        {renderGradientSlidersExample()}
        {renderColorSliderGroupExample()}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    marginBottom: 20,
  },
  row: {
    alignItems: "center",
  },
  ltr: {
    flexDirection: "row-reverse",
  },
  image: {
    tintColor: Colors.$iconNeutral,
  },
  text: {
    width: 40,
  },
  slider: {
    marginVertical: 6,
  },
  sliderContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  gradientSliderContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  track: {
    height: 2,
  },
  thumb: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderColor: Colors.violet40,
    borderWidth: 1,
    shadowColor: Colors.white,
  },
  activeThumb: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: Colors.yellow30,
    borderWidth: 2,
  },
  box: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.$outlineDefault,
  },
  group: {
    backgroundColor: Colors.$backgroundNeutralMedium,
    padding: 10,
    borderRadius: 6,
  },
});

export default TabTwoScreen;
