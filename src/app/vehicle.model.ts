export interface Vehicle {
  vehicleMake?: string;
  vehicleModel?: string;
  vehicleModelVersion?: string;
  drivetrainPowerHP?: number;
  performanceAcceleration?: number;
  performanceTopspeed?: number;
  rangeWLTP?: number;
  rangeReal?: number;
  efficiencyReal?: number;
  chargePlug?: string;
  chargeStandardPower?: number;
  chargeStandardPhase?: number;
  chargeStandardPhaseAmp?: number;
  fastChargePlug?: string;
  fastChargePowerMax?: number;
  batteryCapacityFull?: number;
  image?: string;
  id?: string;
  canRead?: boolean;
  makerImage?: string;
  images?: string[];
}
