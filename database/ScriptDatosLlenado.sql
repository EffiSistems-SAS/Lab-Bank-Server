insert into Cliente values (2315481,'Carrera 15 #119a-40','José Daniel Medina Calvo',4158945);
insert into Cliente values (1324865,'Calle 19c #50-38','Sergio David Páez Suárez',7254253);
insert into Cliente values (9874513,'Carrera 87c #23-45','Miguel Ángel Rico García',1574235);
insert into Cliente values (2138546,'Carrera 5 #60b-12','Raúl Felipe Vega',6574891);
insert into Cliente values (6485631,'Calle 80 #40-55','Nicolás Hernández Noreña',3548912);

insert into TarjetaDebito values ('TRJTID_001',5496321548563714,5489,0,'2026-08-01');
insert into TarjetaDebito values ('TRJTID_002',4812384564589123,4864,0,'2024-02-01');
insert into TarjetaDebito values ('TRJTID_003',6894532185464321,1548,0,'2025-12-01');
insert into TarjetaDebito values ('TRJTID_004',5486513518651348,6178,0,'2023-07-01');
insert into TarjetaDebito values ('TRJTID_005',6578523171153416,2948,0,'2020-01-01');	

insert into Cuenta values ('ACCID_001','485126',215687452135,5000000,'TRJTID_001',2315481,5496321548563714);
insert into Cuenta values ('ACCID_002','798451',156489321849,5000000,'TRJTID_002',1324865,4812384564589123);
insert into Cuenta values ('ACCID_003','549865',486513201985,5000000,'TRJTID_003',9874513,6894532185464321);
insert into Cuenta values ('ACCID_004','321812',785641284165,5000000,'TRJTID_004',2138546,5486513518651348);
insert into Cuenta values ('ACCID_005','845316',132956421841,5000000,'TRJTID_005',6485631,6578523171153416);

insert into Operacion values ('OPID_001',501,'ABONO A TERCEROS');
insert into Operacion values ('OPID_002',601,'RETIRO DE FONDOS');
insert into Operacion values ('OPID_003',701,'CONSULTA DE SALDO');
insert into Operacion values ('OPID_010',101,'INICIO DE SESIÓN');
insert into Operacion values ('OPID_011',201,'CIERRE DE SESIÓN');

insert into Atm values ('IDATM_001',True,10000000,1500000);